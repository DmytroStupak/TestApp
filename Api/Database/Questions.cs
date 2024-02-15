namespace Api.Database
{
    public class Questions
    {
        public string? Titel { get; set; }
        public string[]? Variants { get; set; }
        public int Correct { get; init; }

        public Questions(string title, string[] variants, int correct)
        {
            Titel = title;
            Variants = variants;
            Correct = correct;
        }

    }
}
