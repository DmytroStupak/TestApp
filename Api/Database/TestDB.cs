using Api.Interfaces;

namespace Api.Database
{
    public class TestDB : IDataBase
    {
        private static List<Test> _listProduct;

        public TestDB()
        {
            _listProduct = new List<Test>()
            {new Test(1,"Geography",
                new List<Questions>()
                { new Questions("В какой стране находится самый высокий водопад в Европе?" ,
                      new string[] { "Исландия", "Финляндия", "Швеция", "Норвегия" },3),
                  new Questions("Какой город в мире самый большой по плотности населения?",
                      new string[] { "Пекин", "Манила", "Мумбаи", "Нью-Йорк" },1),
                  new Questions("Какой город в переводе с английского означает «мутное слияние»?",
                      new string[] { "Сингапур", "Джакарта", "Куала-Лумпур", "Гонконг"},2),
                  new Questions("Самая короткая международная граница в мире составляет всего 150 м в длину и соединяет Замбию с какой другой страной?",
                      new string[] { "Ботсвана", "Уганда", "Кения", "Ангола"},0),
                  new Questions("Где Мост вздохов? ",
                      new string[] { "Париж", "Венеция", "Токио", "Сан-Франциско"},1)
                })
            };
        }

        public List<Test> GetTests()
        {
            return _listProduct;
        }
    }
}