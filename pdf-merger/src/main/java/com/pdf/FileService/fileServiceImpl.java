package com.pdf.FileService;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.pdf.Fileentity.fileRecord;
import com.pdf.fileRepository.fileRecordRepo;

@Service
public class fileServiceImpl implements fileService {

    private final fileRecordRepo fileRecordrepo;
    
    // Constructor injection
    public fileServiceImpl(fileRecordRepo fileRecordrepo) {
        this.fileRecordrepo = fileRecordrepo;
    }

    @Override
    public fileRecord savefile(fileRecord record) {
        // Set createdAt timestamp properly
        record.setCreatedAt(LocalDateTime.now());

        // Save using the repository
        return fileRecordrepo.save(record);
    }
}