
# TD Ameritrade IP Company, Inc. (c) 2008-2021
#

declare lower;

input over_bought = 80;
input over_sold = 20;
input over_bought2 = 70;
input over_sold2 = 30;
input KPeriod = 21;
input DPeriod = 3;
input priceH = high;
input priceL = low;
input priceC = close;
input averageType = AverageType.EXPONENTIAL;
input showBreakoutSignals = {default "No", "On SlowK", "On SlowD", "On SlowK & SlowD"};

plot SlowK = reference StochasticFull(over_bought,over_sold,KPeriod,DPeriod,priceH,priceL,priceC,3,averageType).FullK;
plot SlowD = reference StochasticFull(over_bought,over_sold,KPeriod,DPeriod,priceH,priceL,priceC,3,averageType).FullD;
plot OverBought = over_bought;
plot OverSold = over_sold;
plot OverBought2 = over_bought2;
plot OverSold2 = over_sold2;

def upK = SlowK crosses above OverSold;
def upD = SlowD crosses above OverSold;
def downK = SlowK crosses below OverBought;
def downD = SlowD crosses below OverBought;

plot UpSignal;
plot DownSignal;
switch (showBreakoutSignals) {
case "No":
    UpSignal = Double.NaN;
    DownSignal = Double.NaN;
case "On SlowK":
    UpSignal = if upK then OverSold else Double.NaN;
    DownSignal = if downK then OverBought else Double.NaN;
case "On SlowD":
    UpSignal = if upD then OverSold else Double.NaN;
    DownSignal = if downD then OverBought else Double.NaN;
case "On SlowK & SlowD":
    UpSignal = if upK or upD then OverSold else Double.NaN;
    DownSignal = if downK or downD then OverBought else Double.NaN;
}

UpSignal.setHiding(showBreakoutSignals == showBreakoutSignals."No");
DownSignal.setHiding(showBreakoutSignals == showBreakoutSignals."No");

SlowK.setDefaultColor(GetColor(5));
SlowK.assignValueColor(if SlowK > SlowK[1] then Color.UpTick else Color.DOWNTICK);
SlowD.setDefaultColor(GetColor(0));
SlowD.assignValueColor(if SlowD > SlowD[1] then Color.UpTick else Color.DOWNTICK);
OverBought.SetDefaultColor(GetColor(1));
OverSold.SetDefaultColor(GetColor(1));
OverBought2.SetDefaultColor(GetColor(1));
OverSold2.SetDefaultColor(GetColor(1));
UpSignal.SetDefaultColor(Color.UPTICK);
UpSignal.SetPaintingStrategy(PaintingStrategy.ARROW_UP);
DownSignal.SetDefaultColor(Color.DOWNTICK);
DownSignal.SetPaintingStrategy(PaintingStrategy.ARROW_DOWN);


plot midline = 50;
midline.setDefaultColor(Color.ORANGE);
