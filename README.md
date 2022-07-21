# fr

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
sudo curl -sSL https://github.com/grpc/grpc-web/releases/download/1.3.1/protoc-gen-grpc-web-1.3.1-linux-x86_64 -o /usr/local/bin/protoc-gen-grpc-web -o /usr/local/bin/protoc-gen-grpc-web
```
if grpc files are not generated: 
cd ..
git clone https://github.com/Kana-v1-exchange/enviroment.git
sudo protoc -I . enviroment/protos/*.proto --js_out=import_style=commonjs,binary:frontend/src/grpc --grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend/src/grpc
```
npm run serve
```

### Compiles and minifies for production
```

```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
