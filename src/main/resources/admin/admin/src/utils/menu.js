const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除"],"menu":"病人","menuJump":"列表","tableName":"bingren"}],"menu":"病人管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","修改","删除"],"menu":"住院信息","menuJump":"列表","tableName":"zhuyuanxinxi"}],"menu":"住院信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改","删除"],"menu":"出院信息","menuJump":"列表","tableName":"chuyuanxinxi"}],"menu":"出院信息管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","修改","删除","打印"],"menu":"病历信息","menuJump":"列表","tableName":"binglixinxi"}],"menu":"病历信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"科室","menuJump":"列表","tableName":"keshi"}],"menu":"科室管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"住院信息","menuJump":"列表","tableName":"zhuyuanxinxi"}],"menu":"住院信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看"],"menu":"出院信息","menuJump":"列表","tableName":"chuyuanxinxi"}],"menu":"出院信息管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","打印"],"menu":"病历信息","menuJump":"列表","tableName":"binglixinxi"}],"menu":"病历信息管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"病人","tableName":"bingren"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","住院"],"menu":"病人","menuJump":"列表","tableName":"bingren"}],"menu":"病人管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","删除","病历登记","出院登记","新增","修改"],"menu":"住院信息","menuJump":"列表","tableName":"zhuyuanxinxi"}],"menu":"住院信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看"],"menu":"出院信息","menuJump":"列表","tableName":"chuyuanxinxi"}],"menu":"出院信息管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除","打印"],"menu":"病历信息","menuJump":"列表","tableName":"binglixinxi"}],"menu":"病历信息管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"医生","tableName":"yisheng"}]
    }
}
export default menu;