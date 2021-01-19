###
 # @Author: your name
 # @Date: 2020-11-14 16:51:08
 # @LastEditTime: 2020-11-14 16:52:10
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: /my-vip/scripts/test/e2e.sh
### 

cd ./tests/e2e
check_file=`ls  | grep ".spec.ts" |  tr -s "\n"  " "`
jest --findRelatedTests $check_file
