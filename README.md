# leo API Test Platform

![](https://img.shields.io/badge/-%20marvelous-orange) ![](https://img.shields.io/badge/-%20gorgeous-grey) ![](https://img.shields.io/badge/-%20elegant-blue)   

## Ⅰ. LEO API测试平台简介

「LEO API测试平台」是一个开源的接口自动化测试平台。

### 愿景
 本平台致力于提高接口测试效率，实现CI/CD。让平台在保障测试精确性要求的同时更具智能化、泛化能力，
 同时尽可能 **最优化使用体验** ，目标是成为 **最贴心、最好用、颜值最高** 的开源API测试平台。
 
### 技术栈

 平台遵循「前后端分离」思想，技术栈为：「Python + Vue + Mongodb」，后端开发使用的是轻量级 Web 框架 Flask，
前端 UI 框架则采用的是易上手的 ElementUi。
 
 [***（隆重感谢该开源项目的启发)***](https://github.com/amazingTest/Taisite-Platform) 

### 使用环境

**推荐使用 Chrome 最新浏览器使用~**

## Ⅱ. LEO API测试平台特点
 
 1. 平台遵循「小而精」的策略，最大化所有功能的开发、使用性价比，可帮助测试团队快速搭建起易于上手 / 维护的接口
 自动化测试体系。
 
 2. 平台遵循「零编码」原则，使用者不需要编程即可完成较为复杂的业务流程接口测试。
 
 3. 平台遵循「颜值即正义」原则，操作界面展示如下：
 
 ![操作界面展示](https://github.com/Li-Vincent/leo-api-auto/blob/dev/images/project-case-list.png)
 
 4. 平台拥有极佳的定时任务体验，启动定时任务后可随时停用 / 任意编辑任务内容且立即生效，同时支持执行失败邮件通知，
 页面展示如下：
 
 ![定时任务配置](https://github.com/Li-Vincent/leo-api-auto/blob/dev/images/cronJob-date.png)
 
 5. 平台拥有较为丰富的测试结果校验体系。
 ([具体内容可参考本篇博文](https://juejin.im/post/5cfe1dd96fb9a07ed7407321))
 
 6. 平台对外提供测试任务调度接口，方便与开发项目集成，实现CI/CD。
 
 7. ......
 
 ***（还有许许多多令人惊喜的小特色等着你去探索 & 挖掘）***
 

## Ⅲ .LEO API测试平台功能图解

### V1.0

![泰斯特平台结构图_V1.0](https://github.com/amazingTest/Taisite-Platform/blob/master/images/泰斯特平台结构图_V1.0.png)

## IV . LEO API测试平台部署

### windows 环境下部署

#### 1. 克隆项目

    git clone https://github.com/Li-Vincent/leo-api-auto.git

#### 2. 安装 python 3 环境

[点击进入教程](https://www.runoob.com/python3/python3-install.html)

#### 3. 部署 Mongodb 数据库

[点击进入教程](https://www.runoob.com/mongodb/mongodb-window-install.html)

3.1 需要创建平台所需的MongoDB, 如默认MongoDB Name: leo-api-platform-db

3.2 如果MongoDB配置了安全验证，则需要为平台DB单独添加用户(此为flask_mongoengine限制，不确定是否为bug)

[MongoDB设置用户名和密码](https://www.jianshu.com/p/c5f778adfbb3)

[flask_mongoengine认证问题参照此文档](https://segmentfault.com/q/1010000005769647)

#### 4. 设置系统环境变量

    LEO_API_PLATFORM_ENV=production
    LEO_API_PLATFORM_PORT=${PLATFORM_PORT}
    LEO_API_PLATFORM_MONGO_HOST=${MONGO_HOST}
    LEO_API_PLATFORM_MONGO_PORT=${MONGO_PORT}
    LEO_API_PLATFORM_MONGO_USERNAME=${USERNAME}
    LEO_API_PLATFORM_MONGO_PASSWORD=${PASSWORD}
    LEO_API_PLATFORM_MONGO_DBNAME=leo-api-platform-db

说明：LEO_API_PLATFORM_ENV 默认为 production （必填），LEO_API_PLATFORM_PORT为平台端口，默认为8888

LEO_API_PLATFORM_MONGO_HOST 和 LEO_API_PLATFORM_MONGO_PORT 分别表示数据库的地址和端口（必填）

LEO_API_PLATFORM_MONGO_USERNAME 和 LEO_API_PLATFORM_MONGO_PASSWORD 分别表示数据库的帐号密码（若无可不填）

LEO_API_PLATFORM_MONGO_DBNAME 为默认的数据库DB名（如不填默认为：leo-api-platform-db）

设置完成后可通过下列命令进行测试（CMD切换至项目根目录下）

    python ./backend/config.py
  
若配置成功则可看见输入的配置数据

#### 5. 打包前端 dist 文件 （这一步我已为你们做好，若不需二次开发可跳过）

5.1 安装 Vue 环境，下载 node.js 并配置环境，下载 npm 包管理器

[点击进入node.js教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)

5.2 cmd 进入 frontend 目录下，配置 cnpm :

    npm install -g cnpm --registry=https://registry.npm.taobao.org   
  
5.3 执行安装依赖包命令:

    cnpm install
  
5.4 执行打包命令:

    cnpm run build
  
若成功打包则会在项目根目录下生成 dist 文件夹

#### 6. 启动后端

// 切换至项目根目录下执行

    pip install -r ./backend/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

// 启动后端 ( 默认8888端口 )

    python ./backend/run.py


  
#### 7. 访问项目
现在就可以访问 http://127.0.0.1:8888/

7.1 创建平台管理员帐号密码

进入http://127.0.0.1:8888/initAdminUser,进行注册管理员账号，如果db中已经存在管理员账号，此页面无法访问
    
7.2 使用创建的管理员帐号密码进行登录

http://127.0.0.1:8888/

![登录页面展示](https://github.com/Li-Vincent/leo-api-auto/blob/dev/images/login.png)

### Linux 环境下 Docker 容器化部署

[点击进入 Docker 教程地址](https://www.runoob.com/docker/ubuntu-docker-install.html)

#### 1. 克隆项目

    git clone https://github.com/Li-Vincent/leo-api-auto.git
  
#### 2. Mongo 数据库部署 (若已有现成数据库可用则可跳过此步)

2.1 启动数据库 & 数据挂载至宿主机

    sudo -i
    docker pull mongo 
    docker run  --name leo-api-platform-db -p 27017:27017 -v /data/db:/data/db -v /data/configdb:/data/configdb ``-d mongo
  
2.2 创建数据库帐号

    docker exec -it leo-api-platform-db /bin/bash

    mongo

    > use admin

    switched to db admin

    > db.createUser({user:"${USERNAME}",pwd:"${PASSWORD}",roles:["root"]})

    Successfully added user: { "user" : "admin", "roles" : [ "root" ] }
  
2.3 数据库内存扩容(建议)

    > db.adminCommand({setParameter:1, internalQueryExecMaxBlockingSortBytes:335544320})

    { "was" : 33554432, "ok" : 1 }
  
#### 3. 环境变量配置

// 编辑 /etc/profile 文件

    sudo -i
    vi /etc/profile
  
若出现警告则选择 (E)dit anyway (输入 E)

3.1 文本末端插入下列数据 (输入 i 则变为 insert 状态)

    export LEO_API_PLATFORM_ENV=production
    export LEO_API_PLATFORM_PORT=${PORT}
    export LEO_API_PLATFORM_MONGO_HOST=${MONGO_HOST}
    export LEO_API_PLATFORM_MONGO_PORT=${MONGO_PORT}
    export LEO_API_PLATFORM_MONGO_USERNAME=${USERNAME}
    export LEO_API_PLATFORM_MONGO_PASSWORD=${PASSWORD}
    export LEO_API_PLATFORM_MONGO_DBNAME=${DBNAME}

变量为动态值，部署者自行根据实际情况输入，DBNAME 值可任意自定义（数据库表名），其中 MONGO_HOST 值可通过下列命令查询：

    docker inspect leo-api-platform-db // 若使用了上面的步骤部署数据库
  
输出如下图所示：

![控制台输出1.png](https://github.com/amazingTest/Taisite-Platform/blob/master/images/控制台输出1.png)

3.2 插入完毕后点击 ESC 按钮、输入 :wq 后单击回车保存

3.3 执行下列命令后环境变量立即生效

    source /etc/profile
  
#### 4. 启动项目

//在项目根目录下执行部署文件

    sh deploy ${PORT} 
  
其中 ${PORT} 变量填写项目访问端口即可，项目启动的同时也创建了管理员帐号密码，如下图所示：

![控制台输出2.png](https://github.com/amazingTest/Taisite-Platform/blob/master/images/控制台输出2.png)

#### 5. 访问项目

浏览器访问部署服务器地址的 ${PORT}端口即可

![登录页面展示](https://github.com/Li-Vincent/leo-api-auto/blob/dev/images/login.png)