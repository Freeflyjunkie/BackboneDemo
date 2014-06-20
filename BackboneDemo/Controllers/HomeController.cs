using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BackboneDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Rectangles()
        {
            return View();
        }

        public ActionResult Events()
        {
            return View();
        }
    }
}