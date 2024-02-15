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
                { new Questions("� ����� ������ ��������� ����� ������� ������� � ������?" ,
                      new string[] { "��������", "���������", "������", "��������" },3),
                  new Questions("����� ����� � ���� ����� ������� �� ��������� ���������?",
                      new string[] { "�����", "������", "������", "���-����" },1),
                  new Questions("����� ����� � �������� � ����������� �������� ������� �������?",
                      new string[] { "��������", "��������", "�����-������", "�������"},2),
                  new Questions("����� �������� ������������� ������� � ���� ���������� ����� 150 � � ����� � ��������� ������ � ����� ������ �������?",
                      new string[] { "��������", "������", "�����", "������"},0),
                  new Questions("��� ���� �������? ",
                      new string[] { "�����", "�������", "�����", "���-���������"},1)
                })
            };
        }

        public List<Test> GetTests()
        {
            return _listProduct;
        }
    }
}