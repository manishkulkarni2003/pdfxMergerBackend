package com.pdf.Fileentity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;  
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fileRecords")
public class fileRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String originalFileName;
    private String convertedFileName;
    private String fileType;
    private String action;
    private LocalDateTime createdAt;

    // You have two constructors doing the same thing, let's fix that
    public fileRecord() {
        // Default constructor
    }

    public fileRecord(long id, String originalFileName, String convertedFileName, String fileType, String action,
                     LocalDateTime createdAt) {
        this.id = id;
        this.originalFileName = originalFileName;
        this.convertedFileName = convertedFileName;
        this.fileType = fileType;
        this.action = action;
        this.createdAt = createdAt;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOriginalFileName() {
        return originalFileName;
    }

    public void setOriginalFileName(String originalFileName) {
        this.originalFileName = originalFileName;
    }

    public String getConvertedFileName() {
        return convertedFileName;
    }

    public void setConvertedFileName(String convertedFileName) {
        this.convertedFileName = convertedFileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}