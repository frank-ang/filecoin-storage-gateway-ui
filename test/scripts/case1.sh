#!/bin/bash
GEN_TEST_DATA_SCRIPT=$(dirname $(realpath $0))"/gen-test-data.sh"

NUM_FILES=10
FILESIZE_K=1024
TEST_CASE_NAME="case$NUM_FILES""x""$FILESIZE_K"
TEST_CASE_ROOT=/tmp/test/$TEST_CASE_NAME
rm -rf $TEST_CASE_ROOT

echo "executing test case $TEST_CASE_NAME"
$GEN_TEST_DATA_SCRIPT -c $NUM_FILES -s $FILESIZE_K -p $TEST_CASE_NAME -d $TEST_CASE_ROOT/source
singularity prep create --deal-size "2KiB" --max-ratio "0.90" $TEST_CASE_NAME $TEST_CASE_ROOT/source $TEST_CASE_ROOT/car
