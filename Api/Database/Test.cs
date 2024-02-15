using System.ComponentModel.DataAnnotations;

namespace Api.Database
{
    public class Test
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public List<Questions>? Questions { get; set; }

        public Test(int id, string name, List<Questions> questions)
        {
            Id = id;
            Name = name;
            Questions = questions;
            
        }
    }
}