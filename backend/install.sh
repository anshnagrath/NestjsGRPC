 npm install -g pm2 
 cd api-gateway/ && npm install && npm install grpc &&  pm2 start npm --name  "api-gateway" -- run  start:prod  && cd -
 cd microservices/permutation && npm install  && npm install grpc && pm2 start npm --name  "permutation" -- run  start:prod && pm2 logs 
