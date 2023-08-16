// capture with
// node data-mask.js 2>&1 |tee -a /tmp/dashcam/tee.log

setInterval(() => {
  console.log({
    email: "john.doe@example.com",
    creditCard: "1234 5678 9000 9876",
    id: "3f8a43fd-6489-4ec7-bd55-7a1ba172d77b",
    name: "John",
    surname: "Doe",
    phone: "+358 40 1234567",
    token:
      "eyJhbGciOiJIUzI1NiJ9.ew0KICAic3ViIjogIjEyMzQ1Njc4OTAiLA0KICAibmFtZSI6ICJBbGV4IEtvemxvdiIsDQogICJpYXQiOiAxNTE2MjM5MDIyDQp9.PNKysYFTCenU5bekHCmwIxCUXoYG41H_xc3uN3ZF_b8",
    subuser: {
      email: "john.smith@example.com",
      creditCard: "0987 6543 2100 1234",
      id: "7c942511-969b-4363-af11-9667bf756733",
      name: "John",
      surname: "Smith",
      phone: "+358 (0)40 1234567",
      token:
        "eyJraWQiOiJlOTRmODk4Mi02YWI1LTQxZjQtODlkYS03MTYxYmFjZDUzM2UiLCJhbGciOiJFUzI1NiJ9.ew0KICAic3ViIjogIjEyMzQ1Njc4OTAiLA0KICAibmFtZSI6ICJBbGV4IEtvemxvdiIsDQogICJpYXQiOiAxNTE2MjM5MDIyDQp9.CtiBkSYbhs5hEvMA7w4_Dbs3S5IHnxJgRo-fI8UhunY9BCUxBcb9vTRB4uRKLbhCL8MRYR90rzdzE7EcllyyDw",
      subuser: {
        email: "don.johnson@example.com",
        creditCard: "1234-0987-6543-0000",
        id: "12882e75-a726-4615-8631-6ee428e07592",
        name: "Don",
        surname: "Johnson",
        phone: "040-1234567",
        token:
          "eyJraWQiOiIxNDQzZWU0NS01ZGY4LTRlZmYtYmU2Yi1jYjRmMWI3MDA5YjMiLCJhbGciOiJFUzUxMiJ9.ew0KICAic3ViIjogIjEyMzQ1Njc4OTAiLA0KICAibmFtZSI6ICJBbGV4IEtvemxvdiIsDQogICJpYXQiOiAxNTE2MjM5MDIyDQp9.AB0kMsJ1wGlLG-Z89O-a1eZH0RJf3VYO7uoW3otcqV-xF6THYK3v14yppzv10sQ-HZWyUek6MW8-UzB-uq5Pm917ANZUXIw0XVY794W-u1JYrl36rKRi_DqSEEQ9X-hz9BhVFQEaGyNGZSDdKiVdix6MEMgN_4Nt5O-GXwGk6SLFdpBI",
      },
    },
  });
}, 1000);
