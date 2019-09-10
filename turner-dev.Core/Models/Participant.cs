using System;
using System.Collections.Generic;

namespace turner_dev.Core.Models
{
    public partial class Participant
    {
        public Participant()
        {
            TitleParticipant = new HashSet<TitleParticipant>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string ParticipantType { get; set; }

        public ICollection<TitleParticipant> TitleParticipant { get; set; }
    }
}
