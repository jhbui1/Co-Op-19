using CoOp19.Dtb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class GenericViewResource
  {
    public GenericViewResource() { }
    public GenericViewResource(Dtb.Entities.MapData map, GenericResource generic)
    {
      Id = generic.Id;
      LocId = map.Id;
      Gpsn = map.Gpsn;
      Gpsw = map.Gpsw;
      Address = map.Address;
      City = map.City;
      State = map.State;
      Name = generic.Name;
      Description = generic.Description;

    }

    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int? LocId { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string City { get; set; }
    public string Address { get; set; }
    public string State { get; set; }

    public List<ConsumableResource> ConsumableResources { get; set; }
  }
}
