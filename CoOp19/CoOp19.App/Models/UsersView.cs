using CoOp19.Dtb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class UsersView
  {
    public UsersView() { }
    public UsersView(Dtb.Entities.MapData map, Users user)
    {
      Id = user.Id;
      Loc = user.Loc;
      UserName = user.UserName;
      Password = user.Password;
      Fname = user.Fname;
      Lname = user.Lname;
      Phone = user.Phone;
      Email = user.Email;
      Gpsn = map.Gpsn;
      Gpsw = map.Gpsw;
      Address = map.Address;
      City = map.City;
      State = map.State;
    }
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
  }
}
