using System;
using System.Collections.Generic;

namespace turner_dev.Core.Models
{
    public partial class TitleGenre
    {
        public int Id { get; set; }
        public int TitleId { get; set; }
        public int GenreId { get; set; }

        public Genre Genre { get; set; }
        public Title Title { get; set; }
    }
}
