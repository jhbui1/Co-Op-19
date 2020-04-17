using CoOp19.Dtb.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class ConsumableViewResource
  {
    public ConsumableViewResource(Dtb.Entities.MapData map, ConsumableResource consumable)
    {
            
      Id = consumable.Id;
      Price = consumable.Price;
      Quantity = map.Quantity;
      Gpsn = map.Gpsn;
      Gpsw = map.Gpsw;
      Address = map.Address;
      City = map.City;
      State = map.State;
      Name = consumable.Name;
      Description = consumable.Description;
    }

    public int Id { get; set; }
    public int ResourceId { get; set; }
    public decimal? Price { get; set; }
    public int Quantity { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string City { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
    public DateTime DateModified { get; set; } = DateTime.Now;

    public List<ConsumableViewResource> ConsumableViewResources { get; set; } = new List<ConsumableViewResource>();
  }
}
