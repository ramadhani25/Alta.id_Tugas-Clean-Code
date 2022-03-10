// class user {
//     var id;
//     var username;
//     var password;
// }

// class userservice {
//     user[] users = [];

//     user[] getallusers() {
//         return users;
//     }

//     user getuserbyid(userid) {
//         return users.filter(userid);
//     }
// }



// Kekurangan dalam penulisan kode diatas adalah

// 1. Penulisan Method, penulisan method pada kode diatas sebaiknya menggunakan camelCase, sebagai contoh adalah penulisan getallusers menjadi getAllUsers.

// 2. Penulisan variabel pada class user seharusnya menggunakan constructor, dan setiap pemanggilan harus menggunakan 'this.'. Contoh penulisan yang benar :

        class user {
            constructor(id, username, password) {
                this.id = id;
                this.username = username;
                this.password = password;
            }
        }

// 3. Kesalahan dalam pembuatan object user, penulisan pembuatan object yang benar adalah :
        
        let user = new user(id, uname, pass);

// 4. Kesalahan dalam pembuatan method, penulisan yang benar :
        
        class Contoh {
            namaMethode() {
                // isi statement
            }
        }

// 5. Penulisan nama Class, penulisan nama class sebaiknya menggunakan PascalCase, sebagai contoh adalah penulisan userservice menjadi UserService.