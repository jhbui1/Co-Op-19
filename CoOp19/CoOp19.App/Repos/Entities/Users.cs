using System;
using System.Collections.Generic;

namespace CoOp19.Dtb.Entities
{
    public partial class Users
    {
        public int Id { get; set; }
        public int? Loc { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public decimal? Phone { get; set; }
        public string Email { get; set; }

        public virtual MapData LocNavigation { get; set; }
    }
}
