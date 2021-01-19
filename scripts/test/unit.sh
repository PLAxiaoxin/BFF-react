###
 # @Author: your name
 # @Date: 2020-11-14 16:51:19
 # @LastEditTime: 2020-11-14 16:52:23
 # @LastEditors: your name
 # @Description: In User Settings Edit
 # @FilePath: /my-vip/scripts/test/unit.sh
### 

cd ./tests/unit
check_file=`ls  | grep ".spec.ts" |  tr -s "\n"  " "`
jest --findRelatedTests $check_file
