using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrHelp.Models
{
    public class Notification
    {
        [JsonProperty(propertyName: "body")]
        public string Body { get; set; }

        [JsonProperty(propertyName: "title")]
        public string Title { get; set; }

        [JsonProperty(propertyName: "vibrate")]
        public int[] Vibrate { get; set; } = { 500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500 };

        [JsonProperty(propertyName: "icon")]
        public string Icon { get; set; }

        [JsonProperty(propertyName: "color")]
        public string Color { get; set; }

        [JsonProperty(propertyName: "sound")]
        public string Sound { get; set; } = "default";

        [JsonProperty(propertyName: "click_action")]
        public string ClickAction { get; set; }

        [JsonProperty(propertyName: "tag")]
        public string Tag { get; set; }

        [JsonProperty(propertyName: "dir")]
        public string Dir { get; set; } = "rtl";
    }
}
