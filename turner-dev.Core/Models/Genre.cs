using System;
using System.Collections.Generic;

namespace turner_dev.Core.Models
{
    public partial class Genre
    {
        public Genre()
        {
            TitleGenre = new HashSet<TitleGenre>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<TitleGenre> TitleGenre { get; set; }
    }
}
