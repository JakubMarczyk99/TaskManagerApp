using Microsoft.EntityFrameworkCore;

namespace TaskManager.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }

        public DbSet<TaskType> TaskTypes { get; set; } 

        public DbSet<Status> Statuses { get; set; } 


    }
}
