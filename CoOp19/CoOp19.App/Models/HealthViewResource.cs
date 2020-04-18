using CoOp19.Dtb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class HealthViewResource
  {
    public HealthViewResource() { }
    public HealthViewResource(HealthResource health, GenericResource gen, Dtb.Entities.MapData map)
    {
      Id = health.Id;
      ResourceId = health.ResourceId;
      ProvidesTests = health.ProvidesTests;
      TestPrice = health.TestPrice;
      Gpsn = map.Gpsn;
      Gpsw = map.Gpsw;
      Address = map.Address;
      City = map.City;
      State = map.State;
      Name = gen.Name;
      Description = gen.Description;
    }

    public int Id { get; set; }
    public int ResourceId { get; set; }
    public bool ProvidesTests { get; set; }
    public decimal? TestPrice { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string City { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public List<Dtb.Entities.HealthResourceServices> Services { get; set; }
  }
}
