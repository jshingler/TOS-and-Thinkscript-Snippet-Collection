#! /bin/sh

set -x

asciidoctor ./jim.adoc
asciidoctor-pdf ./jim.adoc
#asciidoctor -b pdf ./jim.adoc
ls -la
