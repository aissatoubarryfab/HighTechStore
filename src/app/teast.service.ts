// import { Injectable } from "@angular/core";
// import { Message } from "./Message";


// @Injectable()
// export class ToastService {


//   constructor(private db: AngularFireDatabase) { }

//   getMessages(): FirebaseListObservable<Message[]> {
//     return this.db.list('/messages', {
//       query: {
//         orderByKey: true,
//         limitToLast: 5
//       }
//     });
//   }

//   sendMessage(content : string, style :string) {
//     const message = new Message(content, style)
//     this.db.list('/messages').push(message)
//   }

//   dismissMessage(messageKey : string) {
//     this.db.object(`messages/${messageKey}`).update({'dismissed': true})
//   }

// }
