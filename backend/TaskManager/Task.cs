using System.ComponentModel.DataAnnotations;

namespace TaskManager
{
    public class Task
    {
        public int Id { get; set; }

        [StringLength(10)]
        public string Status { get; set; } = String.Empty;

        [StringLength(200)]
        public string Comments { get; set; } = String.Empty;

        
        public int TaskTypeId { get; set; }   

        public TaskType? TaskType { get; set; }
    }
}
