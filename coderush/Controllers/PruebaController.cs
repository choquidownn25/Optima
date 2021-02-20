using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using coderush.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace coderush.Controllers
{
    public class PruebaController : Controller
    {
        public async Task<IActionResult> Index()
        {
            List<Root> reservationList = new List<Root>();
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://api.coingecko.com/api/v3/coins/list?include_platform=true"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    reservationList = JsonConvert.DeserializeObject<List<Root>>(apiResponse);
                }
            }
            Console.Write(reservationList);
            //Console.ReadKey();
            return View(reservationList);
        }

        public ViewResult GetReservation() => View();

        [HttpPost]
        public async Task<IActionResult> GetReservation(int id)
        {
            Root reservation = new Root();
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:44324/api/Reservation/" + id))
                {
                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        string apiResponse = await response.Content.ReadAsStringAsync();
                        reservation = JsonConvert.DeserializeObject<Root>(apiResponse);
                    }
                    else
                        ViewBag.StatusCode = response.StatusCode;
                }
            }
            return View(reservation);
        }

    }
}
