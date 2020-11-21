#!/bin/sh

# $1 will provide the value of who-to-greet
# $1 also has alias as $INPUT_WHO_TO_GREET
echo "Hello $1"

time=$(date)

echo "::set-output name=time::$time"
