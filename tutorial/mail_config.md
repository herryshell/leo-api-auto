### 3_邮件配置
>此平台 **邮件配置** 的作用为： 定时任务执行完毕后，发送邮件通知。  
>*如不需要发送邮件通知，可不配置*

>平台只能配置一个发件人，*邮件发送使用SMTP服务，所以发件人邮箱需开启SMTP*  
>平台支持收件人分组管理，便于不同的服务，向不同的team人员发送报告

只有超级管理员和项目管理员有 **邮件配置** 权限  
管理员账号登录后，点击左侧 Menu **邮件配置** 进入邮件配置页面
#### 3.1 发件人配置
只有超级管理员有 **发件人配置** 权限  
1. 进入 **邮件配置** 页面后，页面会展示 邮件分组列表
2. 点击 列表上方 **发件人配置** 按钮
3. 输入 邮件标题、发件人邮箱、邮箱授权码、SMTP Server、Port  
[以QQ邮箱为例，获取邮箱授权码的方法](https://jingyan.baidu.com/article/6079ad0eb14aaa28fe86db5a.html)
4. 信息输入完成后，点击 **请先验证** 按钮  
如果配置成功，会收到提示 *验证通过 (\*^▽^\*) 您可以放心「提交」了*  
同时，刚配置的发件人邮箱，会收到自己发送的测试邮件
5. 点击 **提交** 保存发件人配置

#### 3.2 收件人分组管理
只有超级管理员有 **收件人分组管理** 权限  
##### 3.2.1 添加收件人分组
1. 进入 **邮件配置** 页面后，页面会展示 邮件分组列表
2. 点击 列表上方 **新增收件人分组** 按钮
3. 输入 分组 名称、描述 信息
4. 点击 **提交** 保存收件人分组
##### 3.2.2 编辑收件人分组
1. 进入 **邮件配置** 页面后，页面会展示 邮件分组列表
2. 可以在页面右上角 进行查询，查询条件为 分组名称，支持模糊查询
3. 选择要编辑的 收件人分组，点击右侧 **编辑** 按钮
4. 输入 要修改的 名称/描述 信息
5. 点击 **提交** 保存收件人分组
##### 3.2.3 禁用/启用收件人分组
1. 进入 **邮件配置** 页面后，页面会展示 邮件分组列表
2. 可以在页面右上角 进行查询，查询条件为 分组名称，支持模糊查询
3. 选择要禁用的 收件人分组，点击右侧 **禁用** 按钮（如果分组状态为禁用，则按钮为 **启用**）， 即可禁用/启用 收件人分组
4. *如果 收件人分组为禁用状态，那么 定时任务执行后，则不会向此分组的收件人发送通知邮件*。

#### 3.3 收件人邮箱管理
只有超级管理员和项目管理员有 **收件人邮箱管理** 权限  
1. 进入 **邮件配置** 页面后，页面会展示 邮件分组列表
2. 可以在页面右上角 进行查询，查询条件为 分组名称，支持模糊查询  
3. 选择收件人所在的分组，点击 **分组名称** 进入收件人配置页面  
##### 3.3.1 添加收件人  
1. 进入收件人配置页面后，点击 **新增收件人**  
2. 输入 分组 名称、邮箱地址、描述 信息  
3. 点击 **提交** 保存收件人信息  
##### 3.3.2 编辑收件人
1. 进入收件人配置页面后，页面会展示 **收件人列表**
2. 可以在页面右上角 进行查询，查询条件为 邮箱地址，支持模糊查询
3. 选择要编辑的 收件人，点击右侧 **编辑** 按钮
4. 输入 要修改的 名称/邮箱地址/描述 信息
5. 点击 **提交** 保存收件人信息
##### 3.3.3 禁用/启用收件人
1. 进入收件人配置页面后，页面会展示 **收件人列表**
2. 可以在页面右上角 进行查询，查询条件为 邮箱地址，支持模糊查询
3. 选择要禁用的 收件人，点击右侧 **禁用** 按钮（如果状态为禁用，则按钮为 **启用**），即可禁用/启用 收件人
4. *如果 收件人为禁用状态，那么 定时任务执行后，则不会向此收件人发送通知邮件*。