#!/bin/sh

# $1 will provide the value of who-to-greet
# $1 also has alias as $INPUT_WHO-TO-GREET
echo "Hello ${INPUT_WHO-TO-GREET}"

time=$(date)

echo "::set-output name=time::$time"
