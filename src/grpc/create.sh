#!/bin/bash

PROTO_DIR=./src/grpc

protoc \
--proto_path=./src/grpc \
--js_out=import_style=commonjs,binary:${PROTO_DIR} \
--grpc_out=${PROTO_DIR} \
--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
src/grpc/*.proto
