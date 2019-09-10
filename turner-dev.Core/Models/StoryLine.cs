using System;
using System.Collections.Generic;

namespace turner_dev.Core.Models
{
    public partial class StoryLine
    {
        public int TitleId { get; set; }
        public string Type { get; set; }
        public string Language { get; set; }
        public string Description { get; set; }
        public int Id { get; set; }

        public Title Title { get; set; }
    }
}
