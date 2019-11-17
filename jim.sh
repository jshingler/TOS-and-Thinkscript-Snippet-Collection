#! /bin/sh

set -x

asciidoctor -b pdf ./jim.adoc
asciidoctor -b html5 ./jim.adoc
