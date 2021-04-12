generate:
	protoc -I=protos service.proto \
    --js_out=import_style=commonjs,binary:protos \
  	--grpc-web_out=import_style=typescript,mode=grpcwebtext:protos


# protoc protos/service.proto --js_out=import_style=commonjs,binary:./protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./protos
# protoc -I=$DIR echo.proto \
#   --js_out=import_style=commonjs,binary:$OUT_DIR \
#   --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR