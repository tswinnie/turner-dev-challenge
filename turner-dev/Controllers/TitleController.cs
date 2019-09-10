using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using turner_dev.Core.Models;
using turner_dev.Data.Services;

namespace turner_dev.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitleController : ControllerBase
    {
        private ITitleData _titleData;

        public TitleController(ITitleData titleData)
        {
            _titleData = titleData;
        }

        [HttpGet("[action]")]
        public IEnumerable<Title> ListTitles()
        {

            return _titleData.GetTitles();
        }

        [HttpGet("[action]")]
        public IEnumerable<Title> FindTitle(string titleName)
        {

            return _titleData.GetTitleByName(titleName);
        
        }


    }
}