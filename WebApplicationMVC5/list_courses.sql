SELECT
    c.[Course Name] AS Course,
    COUNT(DISTINCT p.[Professor Id]) AS Number_of_Teachers,
    COUNT(DISTINCT [Student Id]) AS Number_of_Students,
    AVG(g.[Student Grade]) AS Grade_Avarage
FROM Courses c
LEFT JOIN Discipline s ON c.[Course Id] = s.[Discipline Id]
LEFT JOIN Professors p ON s.[ Professor ID] = p.[Professor Id]
LEFT JOIN Grades g ON s.[Discipline Id] = g.[Discipline Id]
GROUP BY c.[Course Name];

