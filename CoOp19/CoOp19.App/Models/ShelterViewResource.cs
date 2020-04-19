using CoOp19.App.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class ShelterViewResource
  {
    public ShelterViewResource() { }
    public ShelterViewResource(Dtb.Entities.MapData map,
      Dtb.Entities.ShelterResource shelt,
      Dtb.Entities.GenericResource gen)
    {
      Id = shelt.Id;
      Vacancy = shelt.Vacancy;
      Rating = shelt.Rating;
      IsSafe = shelt.IsSafe;
      Gpsn = map.Gpsn;
      Gpsw = map.Gpsw;
      Address = map.Address;
      City = map.City;
      State = map.State;
      Name = gen.Name;
      Description = gen.Description;
    }
    public int Id { get; set; }
    public int Vacancy { get; set; }
    public byte Rating { get; set; }
    public bool IsSafe { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string City { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
  }
}
