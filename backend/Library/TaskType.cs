using System.ComponentModel.DataAnnotations;

namespace TaskManager
{
    public class TaskType
    {
        public int Id { get; set; }

        [StringLength(100)]

        public string TaskName { get; set; } = String.Empty;

    }
}
