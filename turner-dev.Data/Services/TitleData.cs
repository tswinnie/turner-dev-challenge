using System;
using System.Collections.Generic;
using System.Text;
using turner_dev.Core.Models;
using System.Linq;

namespace turner_dev.Data.Services
{
    public class TitleData : ITitleData
    {
        private TurnerTitlesDbContext _db;

        public TitleData(TurnerTitlesDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Title> GetTitleByName(string titleName = null)
        {
            //only return title matching titleName
            var query = from t in _db.Title
                        where t.TitleName.StartsWith(titleName) || string.IsNullOrEmpty(titleName)
                        orderby t.TitleName
                        select t;
            return query;

        }

        public IEnumerable<Title> GetTitles()
        {
            //only return first 10
            var query = (from t in _db.Title
                         orderby t.TitleName
                         select t).Take(10);

            return query;

        }
    }
}
