﻿using System;
using System.Collections.Generic;

namespace turner_dev.Core.Models
{
    public partial class Title
    {
        public Title()
        {
            Award = new HashSet<Award>();
            OtherName = new HashSet<OtherName>();
            StoryLine = new HashSet<StoryLine>();
            TitleGenre = new HashSet<TitleGenre>();
            TitleParticipant = new HashSet<TitleParticipant>();
        }

        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }
        public int? TitleTypeId { get; set; }
        public int? ReleaseYear { get; set; }
        public DateTime? ProcessedDateTimeUtc { get; set; }

        public ICollection<Award> Award { get; set; }
        public ICollection<OtherName> OtherName { get; set; }
        public ICollection<StoryLine> StoryLine { get; set; }
        public ICollection<TitleGenre> TitleGenre { get; set; }
        public ICollection<TitleParticipant> TitleParticipant { get; set; }
    }
}
