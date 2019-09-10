using System;
using System.Collections.Generic;

namespace turner_dev.Core.Models
{
    public partial class OtherName
    {
        public int? TitleId { get; set; }
        public string TitleNameLanguage { get; set; }
        public string TitleNameType { get; set; }
        public string TitleNameSortable { get; set; }
        public string TitleName { get; set; }
        public int Id { get; set; }

        public Title Title { get; set; }
    }
}
