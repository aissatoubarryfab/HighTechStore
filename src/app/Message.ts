export class Message {
    content: string;
    style: string;
    dismissed: boolean = false;
  
    constructor(content: string, style: string) {
      this.content = content
      this.style = style || 'info'
    }
  
  }