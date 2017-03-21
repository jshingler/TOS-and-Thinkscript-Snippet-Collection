//sed -e "s/- .*-//" j.txt |  sed -e "s/\.\..*$//" | sed -e "s/ /_/g" | sed -e "s/\(.*\)/[xxx](#\1)/"

// groovy
File file1 = new File('j.txt')

file1.eachLine { line ->
    //println ">${line}<"
    if (line.startsWith("- ") && !line.startsWith("- NEXT")) {
        l1 = line.replace("- ","")
        l2 = line.toUpperCase().split(/\./)[0].trim() 
        //println "l2>${l2.split(/\-/).size()} <l2"
        if (l2.split(/\-/).size() > 2) {
            l3 = l2.split(/\-/)[2]
                .replaceAll(" ","_")
                .replaceAll("'","")
                .replaceAll(",","")
                .replaceAll("\\(","")
                .replaceAll("\\)","")
                .replaceAll("&","AND")
            println "- [${l1}](#$l3)"
            println "<a name=\"${l3}\"> </a>"
        }
    } else {
        println line
    }
}