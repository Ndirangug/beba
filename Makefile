generate:
	export PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts" && \
	export OUT_DIR="./protos" && \
	protoc \
		--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
		--js_out="import_style=commonjs,binary:./protos" \
		--ts_out="service=grpc-web:./protos" \
		protos/service.proto


# protoc protos/service.proto --js_out=import_style=commonjs,binary:./protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./protos
# protoc -I=$DIR echo.proto \
#   --js_out=import_style=commonjs,binary:$OUT_DIR \
#   --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR