###
 # @Author: your name
 # @Date: 2020-11-14 09:40:18
 # @LastEditTime: 2020-11-15 15:18:26
 # @LastEditors: your name
 # @Description: In User Settings Edit
 # @FilePath: /my-vip/scripts/server/start.sh
### 
cross-env NODE_ENV=development ts-node-dev --respawn --transpile-only  --project ./src/server/tsconfig.json  ./src/server/app.ts
