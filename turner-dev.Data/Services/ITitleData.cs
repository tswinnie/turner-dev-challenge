using System;
using System.Collections.Generic;
using System.Text;
using turner_dev.Core.Models;

namespace turner_dev.Data.Services
{
    public interface ITitleData
    {
        IEnumerable<Title> GetTitles();
        IEnumerable<Title> GetTitleByName(string titleName);
    }
}
