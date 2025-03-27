const base = {
    get() {
        return {
            url : "http://localhost:8080/yujiaguanyuyue/",
            name: "yujiaguanyuyue",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yujiaguanyuyue/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "瑜伽馆管理系统"
        } 
    }
}
export default base
