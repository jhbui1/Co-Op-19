using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class UsersView
  {
    public int Id { get; set; }
    public int? Loc { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
    public string Fname { get; set; }
    public string Lname { get; set; }
    public decimal? Phone { get; set; }
    public string Email { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public DateTime DateModified { get; set; } = DateTime.Now;
    public List<UsersView> UsersViews { get; set; } = new List<UsersView>();
  }
}
