using System;
using System.Collections.Generic;

namespace turner_dev.Core.Models
{
    public partial class TitleParticipant
    {
        public int Id { get; set; }
        public int TitleId { get; set; }
        public int ParticipantId { get; set; }
        public bool IsKey { get; set; }
        public string RoleType { get; set; }
        public bool IsOnScreen { get; set; }

        public Participant Participant { get; set; }
        public Title Title { get; set; }
    }
}
