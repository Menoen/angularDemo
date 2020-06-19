import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  public title:string = "我是一个新闻组件";
  
  public userinfo:any = {
    username: "张三",
    age: "20"
  }

  public student = "我是一个学生的数据";
  public content = "<h1>这是个输出的html</h1>"

  public arr:Array<string>= ['第一个新闻','第二个新闻','第三个新闻'];

  public picture = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"

  public userList:any[]=[{
    username:'张三',
    age:20
  },{
    username:'李四',
    age:21
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
