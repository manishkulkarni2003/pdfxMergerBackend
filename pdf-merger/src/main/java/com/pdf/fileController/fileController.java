package com.pdf.fileController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pdf.FileService.fileService;
import com.pdf.Fileentity.fileRecord;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/file")
public class fileController {
    
    // Using @Autowired instead of RequiredArgsConstructor
    @Autowired
    private fileService fileService;
    
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        // Create fileRecord object and populate its fields
        fileRecord record = new fileRecord();
        record.setOriginalFileName(file.getOriginalFilename());
        record.setFileType("PDF"); // You can later detect the actual file type
        record.setAction("UPLOAD");
        record.setCreatedAt(LocalDateTime.now()); // Set current timestamp
        
        // Save record to DB
        fileService.savefile(record);
        
        return ResponseEntity.ok("File uploaded successfully!");
    }
}